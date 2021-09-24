import * as mongo from 'mongoose'

export const UserSchema = new mongo.Schema ({
    Vorname: String,
    Nachname: String,
    Message: String,
    Anhang: [String],
});