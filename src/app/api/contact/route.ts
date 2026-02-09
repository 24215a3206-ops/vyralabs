import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { name, email, projectType, message } = body

        if (!name || !email || !projectType || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Get Google Apps Script Web App URL from environment variable
        const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL

        if (!googleScriptUrl) {
            console.error('GOOGLE_SCRIPT_URL environment variable is not set')
            return NextResponse.json(
                { message: 'Server configuration error. Please contact support.' },
                { status: 500 }
            )
        }

        // Send data to Google Sheets via Google Apps Script
        const response = await fetch(googleScriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            throw new Error('Failed to submit to Google Sheets')
        }

        const result = await response.json()

        return NextResponse.json(
            { 
                message: 'Form submitted successfully',
                data: result 
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { message: 'An error occurred while submitting the form. Please try again.' },
            { status: 500 }
        )
    }
}
