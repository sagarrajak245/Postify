import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const PastUploads: React.FC=()=> {
  const pastUploads = [
    { id: 1, name: "Cert_2023.pdf", date: "2023-05-15" },
    { id: 2, name: "Cert_2022.pdf", date: "2022-05-20" },
  ]

  return (
    <Card className="bg-gray-900 border-gray-800 md:col-span-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <CardHeader>
        <CardTitle className="text-blue-400">Past Uploads</CardTitle>
        <CardDescription className="text-gray-400">View your previously uploaded certificates.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {pastUploads.map((upload) => (
            <li key={upload.id} className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-100">{upload.id}</span>
              <span className="text-gray-100">{upload.name}</span>
              <span className="text-sm text-gray-400">{upload.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
export default PastUploads