export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      students: {
        Row: {
          id: number
          name: string
          rank: number
          year: number
          skills: string[]
          status: string
          bio: string
          email: string
          phone: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          rank: number
          year: number
          skills: string[]
          status?: string
          bio: string
          email: string
          phone: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          rank?: number
          year?: number
          skills?: string[]
          status?: string
          bio?: string
          email?: string
          phone?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
