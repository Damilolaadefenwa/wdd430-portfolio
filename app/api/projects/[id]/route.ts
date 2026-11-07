import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

// I updated the type: params is now a Promise which is the correct type for the new Next.js 14 App Router.
// The previous type was a synchronous type belonging to the old API route structure.
// The rest of the code remains unchanged.
// export async function GET(request: Request, { params }: { params: { id: string } }) {};

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // 1. Await the Promise params object first
  const { id } = await params;
  
  // 2. Convert the awaited ID string into a number
  const projectId = parseInt(id, 10);
  //Validate it is actually a number (handles the /api/projects/abc requirement)
  if (isNaN(projectId)) {
    return NextResponse.json({ error: 'Invalid ID format. Must be a number.' }, { status: 400 });
  }

  // 3. Look up the project
  const project = getProjectById(projectId);

  // 4. Return 404 if the number is valid, but the project doesn't exist
  if (!project) {
    return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
  }

  // 5. Return the successful project data
  return NextResponse.json(project);
}