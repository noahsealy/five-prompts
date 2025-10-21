import { sendDailyDigest } from '@/app/lib/email/sendDailyDigest'

export async function GET() {
  await sendDailyDigest()
  return Response.json({ status: 'ok' })
}