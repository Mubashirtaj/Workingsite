
import UserModel from '@/Model/User';
import { ForGetPassword } from '@/helpers/ResetPassword';
import { dbConnnect } from '@/lib/dbconnect';

export async function POST(request: Request) {

    const { email } = await request.json();
    console.log(email);
    await dbConnnect();

    try {
        const user = await UserModel.findOne({ email });
        const verifyCode1 = Math.floor(100000 + Math.random() * 900000).toString();

        if (!user) {

            return Response.json({ message: "Email Has Not Find" }, { status: 400 });
        }
        else {
            const username = user.username
            const verifyCode = user.email
            ForGetPassword(email, username, verifyCode)
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);

            const User1 = await UserModel.findOneAndUpdate(
                { email },
                {
                    $set: {
                        verifyCode: verifyCode1,
                        verifyCodeExpiry: new Date(Date.now() + 3600000),
                        expiryDate: expiryDate,
                    },
                },
                { new: true } // Option to return the updated document
            );

            if (!User1) {
                // Handle the case where the user is not found
                throw new Error('User  not found'); // or return a specific response
            }

            // If User1 is found, you can safely call save()
            await User1.save();





        }


    } catch (error) {
        console.log(error);

        return Response.json({ message: "Some Error" }, { status: 500 });
    }

    return Response.json({ message: "Email Successfully Send" }, { status: 200 });




}