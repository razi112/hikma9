-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rank INTEGER NOT NULL,
  year INTEGER NOT NULL,
  skills TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'active',
  bio TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on rank for faster sorting
CREATE INDEX IF NOT EXISTS idx_students_rank ON students(rank);

-- Create index on year for filtering
CREATE INDEX IF NOT EXISTS idx_students_year ON students(year);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON students
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON students
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON students
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON students
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO students (name, rank, year, skills, status, bio, email, phone) VALUES
  ('Aman', 1, 2026, ARRAY['Leadership', 'Management', 'Strategy'], 'active', 'Passionate leader with a vision for community building and academic excellence.', 'aman@hikma.edu', '+234 801 000 0001'),
  ('Nihal', 2, 2026, ARRAY['Research', 'Data Analysis', 'Statistics'], 'active', 'Research enthusiast who thrives on turning raw data into meaningful insights.', 'nihal@hikma.edu', '+234 801 000 0002'),
  ('Rayyan', 3, 2026, ARRAY['Engineering', 'Robotics', 'CAD'], 'active', 'Aspiring engineer with hands-on experience in robotics and mechanical design.', 'rayyan@hikma.edu', '+234 801 000 0003'),
  ('Yaseen', 4, 2026, ARRAY['Public Speaking', 'Writing', 'Debate'], 'active', 'Eloquent communicator and debater who inspires through words and action.', 'yaseen@hikma.edu', '+234 801 000 0004'),
  ('Nahash', 5, 2026, ARRAY['Design', 'Figma', 'Illustration'], 'active', 'Creative designer with an eye for detail and a passion for visual storytelling.', 'nahash@hikma.edu', '+234 801 000 0005'),
  ('Nadih', 6, 2026, ARRAY['Marketing', 'Branding', 'Content Creation'], 'active', 'Marketing strategist who builds brands and engages audiences effectively.', 'nadih@hikma.edu', '+234 801 000 0006'),
  ('Shadi', 7, 2026, ARRAY['Finance', 'Budgeting', 'Excel'], 'active', 'Finance-savvy student managing union funds with precision and transparency.', 'shadi@hikma.edu', '+234 801 000 0007'),
  ('Anas', 8, 2026, ARRAY['Medicine', 'First Aid', 'Biology'], 'active', 'Dedicated medical student committed to health awareness and community care.', 'anas@hikma.edu', '+234 801 000 0008'),
  ('Ameen', 9, 2026, ARRAY['Data Science', 'Machine Learning', 'Python'], 'active', 'Data science enthusiast exploring the intersection of AI and real-world applications.', 'ameen@hikma.edu', '+234 801 000 0009'),
  ('Khaleel', 10, 2026, ARRAY['Python', 'Django', 'Backend Dev'], 'active', 'Backend developer building robust systems and scalable web applications.', 'khaleel@hikma.edu', '+234 801 000 0010'),
  ('Shehin', 11, 2026, ARRAY['UI/UX', 'Prototyping', 'User Research'], 'active', 'User experience designer focused on creating intuitive and delightful interfaces.', 'shehin@hikma.edu', '+234 801 000 0011'),
  ('Anzil', 12, 2026, ARRAY['SEO', 'Digital Marketing', 'Analytics'], 'active', 'Digital marketing expert driving online visibility and engagement strategies.', 'anzil@hikma.edu', '+234 801 000 0012'),
  ('Fawaz', 13, 2026, ARRAY['Debate', 'Critical Thinking', 'Philosophy'], 'active', 'Sharp thinker and debater who approaches problems with logic and clarity.', 'fawaz@hikma.edu', '+234 801 000 0013'),
  ('Midlaj', 14, 2026, ARRAY['Biology', 'Ecology', 'Lab Research'], 'active', 'Biology student exploring ecosystems and conducting impactful lab research.', 'midlaj@hikma.edu', '+234 801 000 0014'),
  ('Ziyad', 15, 2026, ARRAY['Accounting', 'Taxation', 'Auditing'], 'active', 'Detail-oriented accounting student with expertise in financial reporting.', 'ziyad@hikma.edu', '+234 801 000 0015'),
  ('Ashkar', 16, 2026, ARRAY['Law', 'Constitutional Studies', 'Ethics'], 'active', 'Aspiring lawyer with a strong sense of justice and ethical reasoning.', 'ashkar@hikma.edu', '+234 801 000 0016'),
  ('Munfis', 17, 2026, ARRAY['AI', 'Deep Learning', 'NLP'], 'active', 'AI researcher pushing boundaries in natural language processing and deep learning.', 'munfis@hikma.edu', '+234 801 000 0017'),
  ('Hisham', 18, 2026, ARRAY['Networking', 'System Admin', 'Linux'], 'active', 'Networking specialist skilled in system administration and infrastructure management.', 'hisham@hikma.edu', '+234 801 000 0018'),
  ('Razi', 19, 2026, ARRAY['Cybersecurity', 'Ethical Hacking', 'Forensics'], 'active', 'Cybersecurity enthusiast focused on protecting systems and ethical penetration testing.', 'razi@hikma.edu', '+234 801 000 0019'),
  ('Bishr', 20, 2026, ARRAY['Cloud Computing', 'AWS', 'DevOps'], 'active', 'Cloud computing specialist building scalable infrastructure on modern platforms.', 'bishr@hikma.edu', '+234 801 000 0020')
ON CONFLICT (email) DO NOTHING;
