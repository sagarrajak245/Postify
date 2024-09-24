import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useRef } from "react";

export function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Certificate Manager",
    avatarUrl: "/placeholder.svg?height=80&width=80",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement database update
    // This is where you would send the updated profile to your backend
    console.log("Profile updated:", profile);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatarUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Card className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] elevation-10">
        <CardHeader>
          <CardTitle className="text-blue-400">Admin Profile</CardTitle>
          <CardDescription className="text-gray-400">Your admin profile information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 ring-2 ring-blue-400 cursor-pointer" onClick={handleAvatarClick}>
              <AvatarImage src={profile.avatarUrl} alt="Admin" />
              <AvatarFallback className="bg-gray-800 text-blue-400">AD</AvatarFallback>
            </Avatar>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-100">{profile.name}</h3>
              <p className="text-sm text-gray-400">Administrator</p>
            </div>
          </div>
          <div>
            <Label htmlFor="name" className="text-gray-300">Name</Label>
            <Input 
              id="name" 
              name="name"
              value={profile.name} 
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:ring-blue-400 focus:border-blue-400" 
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input 
              id="email" 
              name="email"
              value={profile.email} 
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:ring-blue-400 focus:border-blue-400" 
            />
          </div>
          <div>
            <Label htmlFor="role" className="text-gray-300">Role</Label>
            <Input 
              id="role" 
              name="role"
              value={profile.role} 
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:ring-blue-400 focus:border-blue-400" 
            />
          </div>
        </CardContent>
        <CardFooter>
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-black mr-2">Save</Button>
              <Button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-600 text-black">Cancel</Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-600 text-black">Edit Profile</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}


// const handleSave = async () => {
//   setIsEditing(false);
//   try {
//     // TODO: Implement actual API call
//     const response = await fetch('/api/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(profile),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to update profile');
//     }
//     // Optionally, update the profile with the response from the server
//     // const updatedProfile = await response.json();
//     // setProfile(updatedProfile);
//   } catch (error) {
//     console.error('Error updating profile:', error);
//     // TODO: Show error message to user
//   }
// };