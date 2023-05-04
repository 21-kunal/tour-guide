const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Tour name must be provided'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'Tour duration must be provided'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Group size must be provided'],
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty must be provided'],
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour price must be provided'],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'Summary description must be provided'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'Image cover must be provided'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: {
    type: [Date],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
