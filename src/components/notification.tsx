import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from 'lucide-react'

interface NotificationCenter {
  id: number
  message: string
  time: string
}


export function NotificationCenter() {
  const notifications = [
    { id: 1, message: "New post generated for your latest certificate.", time: "2 hours ago" },
    { id: 2, message: "Your post was successfully shared on LinkedIn.", time: "1 day ago" },
  ]

  return (
    <Card className="bg-gray-900 border-gray-800 md:col-span-2 elevation-9">
      <CardHeader>
        <CardTitle className="text-blue-400 flex items-center">
          <Bell className="mr-2 h-5 w-5" /> Notifications
        </CardTitle>
        <CardDescription className="text-gray-400">Your recent activity and updates.</CardDescription>
      </CardHeader>
      <CardContent>
        {notifications.map((notification) => (
          <div key={notification.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-100">{notification.message}</p>
            <p className="text-sm text-gray-400">{notification.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
