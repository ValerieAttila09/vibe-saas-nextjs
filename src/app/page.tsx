import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"

const Page = async () => {

  const users = await prisma.post.findMany()

  return (
    <div className="">
      
    </div>
  )
}

export default Page