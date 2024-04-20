import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    username: string;
    senha: string;
    email: string;
    peso: number;
}

const UserSchema = new Schema<UserInterface>({
    username: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    peso: { type: Number, required: true }
});

const User = model<UserInterface>('User', UserSchema);

export default User;
