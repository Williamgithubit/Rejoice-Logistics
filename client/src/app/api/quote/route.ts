import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  shipmentType: z.string().min(1),
  origin: z.string().min(2), 
  destination: z.string().min(2),
  weight: z.string().min(1),
  dimensions: z.string().optional(),
  description: z.string().optional(),
  urgency: z.string().default('standard'), 
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // Save to database
    const quote = await prisma.quote.create({
      data: validatedData,
    });

    // Here you could add email notification logic
    // await sendQuoteNotificationEmail(validatedData);

    return NextResponse.json(
      { message: 'Quote request submitted successfully', id: quote.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Quote request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}