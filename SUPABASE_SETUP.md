# Supabase Setup Guide for Student Data

This guide will help you set up Lovable Cloud (Supabase) to make student data persistent and editable.

## Step 1: Create a Supabase Project

1. Go to [Lovable Cloud](https://lovable.dev) or [Supabase](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in your project details:
   - Project name: `hikma-class-union`
   - Database password: (create a strong password)
   - Region: Choose closest to your users
5. Wait for the project to be created (takes ~2 minutes)

## Step 2: Get Your API Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 3: Configure Environment Variables

1. Create a `.env` file in the root of your project (hikma9 folder)
2. Add your credentials:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

3. Make sure `.env` is in your `.gitignore` file (it should be by default)

## Step 4: Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `supabase-setup.sql` file
4. Paste it into the SQL editor
5. Click **Run** to execute the SQL

This will:
- Create the `students` table with all necessary columns
- Set up indexes for better performance
- Enable Row Level Security (RLS)
- Create policies for public read and authenticated write access
- Insert the 20 sample students

## Step 5: Verify the Setup

1. Go to **Table Editor** in Supabase
2. You should see the `students` table
3. Click on it to view the 20 sample student records

## Step 6: Run Your Application

```bash
npm run dev
```

The Students page will now fetch data from Supabase instead of using mock data.

## Features Enabled

✅ **Persistent Data**: All student data is stored in Supabase
✅ **Real-time Updates**: Changes are reflected immediately
✅ **CRUD Operations**: Create, Read, Update, Delete students
✅ **Public Read Access**: Anyone can view students
✅ **Authenticated Write**: Only logged-in users can modify data

## API Hooks Available

The following React hooks are available in `src/hooks/useStudents.ts`:

- `useStudents()` - Fetch all students
- `useCreateStudent()` - Add a new student
- `useUpdateStudent()` - Update student information
- `useDeleteStudent()` - Remove a student

## Example: Adding a New Student

```typescript
import { useCreateStudent } from '@/hooks/useStudents';

const { mutate: createStudent } = useCreateStudent();

createStudent({
  name: "New Student",
  rank: 21,
  year: 2026,
  skills: ["Skill1", "Skill2"],
  bio: "Student bio here",
  email: "student@hikma.edu",
  phone: "+234 801 000 0021",
  status: "active"
});
```

## Troubleshooting

### "Failed to load students" error
- Check that your `.env` file has the correct credentials
- Verify the SQL script ran successfully
- Check browser console for specific error messages

### Students not showing up
- Verify data exists in Supabase Table Editor
- Check that RLS policies are enabled
- Ensure your Supabase project is active

### Can't edit students
- Make sure you're authenticated (logged in)
- Check RLS policies allow authenticated users to write

## Next Steps

To add admin functionality for editing students:
1. Implement authentication (Supabase Auth)
2. Create an admin panel with forms
3. Use the mutation hooks to update/delete students
4. Add role-based access control for admin-only features
