
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
  phone: string;
}

export default function AccountPage() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // In a real app, you would fetch user data from an API
    // For demo purposes, we'll use setTimeout to simulate a network request
    setTimeout(() => {
      setUserData({
        name: "Demo User",
        email: "demo.user@example.com",
        phone: "9876543210",
      });
    }, 500);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call to save profile
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      toast.success("Profile updated successfully");
    }, 1000);
  };

  return (
    <div className="container px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="space-y-2">
            <div className="h-32 w-32 mx-auto bg-muted rounded-full flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <p className="text-center font-medium mt-2">{userData.name}</p>
            <p className="text-center text-sm text-muted-foreground">
              {userData.email}
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              disabled={true}
            >
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              disabled={true}
            >
              Orders
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              disabled={true}
            >
              Addresses
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              disabled={true}
            >
              Wishlist
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              disabled={true}
            >
              Payment Methods
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              disabled={true}
            >
              Logout
            </Button>
          </nav>
        </div>

        <div className="md:col-span-3">
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Profile Information</h2>
              {!isEditing && (
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={userData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex space-x-4">
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    disabled={isSaving}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-4">Recent Orders</h3>
              <div className="text-center py-8 text-muted-foreground">
                <p>You haven't placed any orders yet.</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-4">Saved Addresses</h3>
              <div className="text-center py-8 text-muted-foreground">
                <p>No addresses saved yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
