import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CheckoutConfirmation = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleConfirmOrder = () => {
    // Here you would typically integrate with a payment gateway
    // For now, we'll simulate a successful payment
    toast({
      title: "Order Successful!",
      description: "Thank you for shopping with Brewverse!",
    });
    dispatch({ type: 'CLEAR_CART' });
    navigate('/checkout-success');
  };

  if (state.items.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Confirm Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 text-right">
            <p className="text-lg font-bold">Total: ${calculateTotal().toFixed(2)}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutConfirmation;