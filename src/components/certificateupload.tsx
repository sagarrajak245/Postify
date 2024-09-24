import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export function CertificateUpload() {
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the file upload
    alert("Certificate uploaded successfully!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="bg-gray-900 bg-opacity-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-400 text-xl sm:text-2xl md:text-3xl">Upload New Certificate</CardTitle>
          <CardDescription className="text-gray-400 text-sm sm:text-base">Upload a new certificate file here.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="certificate" className="text-gray-300 block">Certificate</Label>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Input
                  id="certificate"
                  type="file"
                  className="bg-gray-800 text-gray-100 border-rose-500 focus:ring-blue-400 focus:border-blue-400 flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-black w-full sm:w-auto"
                >
                  Upload
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}