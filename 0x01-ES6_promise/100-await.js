import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto('photo.jpg'); // You can replace 'photo.jpg' with a relevant filename
        const user = await createUser('John', 'Doe'); // You can replace with actual user data

        return {
            photo: photo,
            user: user,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }
}
