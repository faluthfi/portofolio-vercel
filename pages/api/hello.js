// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "user env":process.env.MAIL_USER,
      "user env":process.env.MAIL_DESTINATION
  }
  )
}
