export const formatTime = (time) => {
    // Get the current time in IST
    const now = new Date();
    const istNow = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // Convert to IST
  
    // Convert time to a Date object
    const publishedDate = new Date(time);
    
    // Get the difference in milliseconds
    const timeDifference = istNow - publishedDate; 
  
    // Convert the difference to seconds, minutes, hours, days, etc.
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    // Create the "time ago" message
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
}
