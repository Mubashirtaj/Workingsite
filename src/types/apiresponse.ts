import { Message } from "@/Model/User";

export interface ApiResponse {
    ID?: string;
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>
};