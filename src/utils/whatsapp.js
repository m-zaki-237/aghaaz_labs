export const openWhatsAppRegistration = ({
  name,
  phone,
  background,
  experience = "Beginner",
  track = "Programming & DSA Demo Class",
}) => {
  const message = encodeURIComponent(
    `Hi Aghaaz Labs!\n\nI want to register for the upcoming *${track}*.\n\n` +
      `• *Name:* ${name}\n` +
      `• *WhatsApp:* ${phone}\n` +
      `• *Background:* ${background}\n` +
      `• *Experience:* ${experience}\n\n` +
      `Please share the demo class access link and resources.`
  );
  window.open(`https://wa.me/923356662958?text=${message}`, "_blank");
};
