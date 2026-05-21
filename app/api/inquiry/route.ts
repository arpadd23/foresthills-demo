import {NextResponse} from 'next/server';

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return NextResponse.json({success: true});
}
