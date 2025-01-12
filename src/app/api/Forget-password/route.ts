import UserModel from '@/Model/User';
import { dbConnnect } from '@/lib/dbconnect';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {

    await dbConnnect();
    const { code, password } = await request.json();
    console.log(code, password);
    const decodedUsername = decodeURIComponent(code);
    const user = await UserModel.findOne({ _id: decodedUsername });

    try {
        if (!user) {
            return Response.json({ message: "error", status: 405, },)

        }
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();
        if (isCodeNotExpired) {
            const hashedPassword = await bcrypt.hash(password, 10);

            const User1 = await UserModel.findOneAndUpdate(
                { _id: code },
                {
                    $set: {

                        password: hashedPassword
                    },
                },
                { new: true } // Option to return the updated document

            );
            if (!User1) {
                throw new Error('User  not found'); // or return a specific response

            }
            await User1.save();
        }




    } catch (error) {
        return Response.json({ message: "error", status: 400, error },)

    }

    return Response.json({ message: "donneeeeeeeeeee", status: 200 })
}