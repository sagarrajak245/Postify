import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export function PostApproval() {
  const pendingPosts = [
    { id: 1, content: "Check out my new certification in web development!" },
    { id: 2, content: "Just completed an advanced course in data science. Excited to apply these skills!" },
  ]

  const handleApprove = (id) => {
    // Here you would handle the approval logic
    console.log(`Approved post ${id}`)
  }

  const handleReject = (id) => {
    // Here you would handle the rejection logic
    console.log(`Rejected post ${id}`)
  }

  return (
    <Card className="bg-gray-900 border-gray-800 md:col-span-2 ">
      <CardHeader>
        <CardTitle className="text-blue-400">Approve Posts</CardTitle>
        <CardDescription className="text-gray-400">Review and approve generated posts.</CardDescription>
      </CardHeader>
      <CardContent>
        {pendingPosts.map((post) => (
          <div key={post.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-100 mb-2">{post.content}</p>
            <div className="flex space-x-2">
              <Button onClick={() => handleApprove(post.id)} className="bg-green-500 hover:bg-green-600 text-black">Approve</Button>
              <Button onClick={() => handleReject(post.id)} className="bg-red-500 hover:bg-red-600 text-black">Reject</Button>
            </div>
          </div>
        ))}
      </CardContent>
      
    </Card>
  )
}