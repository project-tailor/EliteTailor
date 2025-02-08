import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    // Truy vấn cơ sở dữ liệu
    const res = await pool.query('SELECT * FROM products')
    return NextResponse.json(res.rows)
  } catch (error: any) {
    console.error('Database Error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
