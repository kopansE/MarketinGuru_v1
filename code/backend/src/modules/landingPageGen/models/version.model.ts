import mongoose, { Schema, Document } from 'mongoose';
import { IVersion } from '../types/version.types';

export interface IVersionDocument extends IVersion, Document {}

const VersionSchema = new Schema({
  versionNumber: {
    type: Number,
    required: true,
    unique: true
  },
  components: {
    type: Schema.Types.Mixed,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: true
  }
});

export const Version = mongoose.model<IVersionDocument>('Version', VersionSchema);