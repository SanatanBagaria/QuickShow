import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";

// API Controller Function to Get User Bookings
export const getUserBookings = async (req, res) => {
    try {
        const user = req.auth().userId;
        
        const bookings = await Booking.find({user}).populate({
            path: "show",
            populate: {path: "movie"}
        }).sort({createdAt: -1})
        
        res.json({success: true, bookings})
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
}

//Api Controller Function to update Favourite Movie in Clerk user Metadata
export const updateFavorite = async (req, res) => {
    try {
        const { movieId } = req.body;
        const userId = req.auth().userId;

        const user = await clerkClient.users.getUser(userId);

        // Get the current favorites, or initialize an empty array if it doesn't exist
        const favorites = user.privateMetadata.favorites || [];

        const isFavorite = favorites.includes(movieId);
        let updatedFavorites;
        let message;

        if (isFavorite) {
            // If it's already a favorite, REMOVE it
            updatedFavorites = favorites.filter(id => id !== movieId);
            message = 'Removed from favorites';
        } else {
            // If it's not a favorite, ADD it
            updatedFavorites = [...favorites, movieId];
            message = 'Added to favorites';
        }

        // Update Clerk with the new, correctly toggled array
        await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: {
                ...user.privateMetadata, // Preserve other metadata
                favorites: updatedFavorites
            }
        });

        res.json({ success: true, message: message }); // Send back the specific message

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server error while updating favorites." });
    }
};


//getting favorite movies

export const getFavorites = async (req, res) => {
    try {
        const user = await clerkClient.users.getUser(req.auth().userId)
        const favorites = user.privateMetadata.favorites;

        //getting mvies from database
        const movies = await Movie.find({_id: {$in: favorites}})

        res.json({success: true, movies})
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
}
