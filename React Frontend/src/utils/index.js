export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
export const handleEmail = () => {
  const email = "sitymadlab@gmail.com"; // Replace with your Gmail address
  const subject = encodeURIComponent("Get in Touch");
  const body = encodeURIComponent("Your email body here");
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  
};