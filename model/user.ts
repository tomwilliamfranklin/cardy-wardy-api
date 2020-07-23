export class User { 
        id: number;
        firstName: string;
        secondName: string;
        fullName: string;
        dateOfBirth: Date;
        email: string;
        caption: string;
        emote: string;
        avatar: string | null; // Allow nullable Avatar

        constructor(id: number, firstName: string, secondName: string, 
                fullName: string, dateOfBirth: Date, email: string, caption: string, emote: string, avatar: string | null = null) {
                this.id = id;
                this.firstName = firstName;
                this.secondName = secondName;
                this.fullName = fullName;
                this.dateOfBirth = dateOfBirth;
                this.email = email;
                this.caption = caption;
                this.emote = emote;
                this.avatar = avatar;
        }
}