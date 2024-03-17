interface FAQSectionProps {}

const FAQSection = ({}: FAQSectionProps) => {
  return (
    <section className="mt-20 min-h-[100dvh]" id="faq">
      <h1 className="text-center text-3xl text-white md:text-4xl lg:text-5xl">
        FAQ Section
      </h1>
    </section>
  );
};

export default FAQSection;
