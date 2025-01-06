import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Order Successful!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Thank you for shopping with Brewverse. Your order has been confirmed.
          </p>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutSuccess;