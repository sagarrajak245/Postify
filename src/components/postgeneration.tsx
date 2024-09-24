import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

import { useState } from "react"
export function PostGeneration() {
  const [generatedPost, setGeneratedPost] = useState('')

  const handleGenerate = () => {
    // Here you would call your AI service to generate a post
    setGeneratedPost('This is a sample generated post about your latest certificate.')
  }

  return (
    <Card className="bg-gray-900  bg-opacity-50 elevation-9 border-gray-800 md:col-span-2 ">
      <CardHeader>
        <CardTitle className="text-blue-400">Generate Social Media Post</CardTitle>
        <CardDescription className="text-gray-400">Generate a post based on your latest certificate.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGenerate} className="bg-blue-500 hover:bg-blue-600 text-black">Generate Post</Button>
        {generatedPost && (
          <Textarea 
            value={generatedPost}
            onChange={(e) => setGeneratedPost(e.target.value)}
            className="bg-gray-800 text-gray-100 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
            rows={4}
          />
        )}
        {/* <PostApproval /> */}
      </CardContent>
     
    </Card>
  )
}