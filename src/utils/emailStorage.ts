
/**
 * Saves an email to localStorage
 */
export const saveEmail = (email: string): void => {
  try {
    // Get existing emails
    const existingEmails = getEmails();
    
    // Add new email if it doesn't already exist
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      
      // Save back to localStorage
      localStorage.setItem('waitlist_emails', JSON.stringify(existingEmails));
      console.log(`Email saved: ${email}`);
    } else {
      console.log(`Email already exists: ${email}`);
    }
  } catch (error) {
    console.error('Error saving email:', error);
  }
};

/**
 * Retrieves all saved emails from localStorage
 */
export const getEmails = (): string[] => {
  try {
    const storedEmails = localStorage.getItem('waitlist_emails');
    return storedEmails ? JSON.parse(storedEmails) : [];
  } catch (error) {
    console.error('Error retrieving emails:', error);
    return [];
  }
};

/**
 * Exports all emails as CSV
 */
export const exportEmailsAsCSV = (): string => {
  const emails = getEmails();
  return emails.length > 0 ? emails.join(',\n') : '';
};

/**
 * Clears all stored emails
 */
export const clearEmails = (): void => {
  localStorage.removeItem('waitlist_emails');
  console.log('All emails cleared');
};
