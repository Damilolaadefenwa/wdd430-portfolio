import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const projects = await getProjects(type);
  return NextResponse.json(projects);
}

/* NOTE: PREVIOUS SOLUTION */
/* export async function GET(request: Request) {
  // Extract the URL and look for a "?type=" query parameter
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  
  // Fetch projects (filtered if a type exists, otherwise all)
  const data = getProjects(type);
  
  // Return the data as a JSON response
  return NextResponse.json(data);
} */