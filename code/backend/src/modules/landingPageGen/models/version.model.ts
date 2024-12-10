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
  },
  pageName: {
    type: String,
    required: false
  },
  isPage: {
    type: Boolean,
    default: false
  }
});

export const Version = mongoose.model<IVersionDocument>('Version', VersionSchema);