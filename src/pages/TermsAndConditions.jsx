import React from "react";
import "./Terms.css";
import bg from "/logo.webp"; 

const Terms = () => {
  return (
    <section
      className="terms-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="terms-overlay"></div>

      <div className="terms-container">
        <h1>Terms and Conditions</h1>

        <div className="terms-content">
          <h2>1. Booking Terms</h2>
          <ul>
            <li>
              Booking can be confirmed by paying 50% of the billing amount if the
              event is more than 15 days later.
            </li>
            <li>
              In case of booking is confirmed with 50% payment, the remaining
              outstanding amount to be paid at check-in.
            </li>
            <li>
              For bookings done within 7 days, 100% of billing amount to be paid
              for confirmation.
            </li>
            <li>
              50% amount is refunded if the booking is canceled 7 days before
              the event date.
            </li>
            <li>No refund if booking is canceled within 7 days of event date.</li>
            <li>Booking is non-transferable.</li>
          </ul>

          <h2>2. Alcohol Policy</h2>
          <ul>
            <li>
              Teakwood does not have license to sell alcohol. Alcohol is not
              served at the property.
            </li>
            <li>
              Guests may bring their own alcohol with proper government permit.
            </li>
            <li>
              Rs 5000/- refundable deposit is compulsory if consuming alcohol at
              the property.
            </li>
            <li>Food timings are fixed and will not be changed for any reason.</li>
          </ul>

          <h2>3. General Terms</h2>
          <ul>
            <li>
              A list of all guests along with their phone numbers must be
              received a day before check-in date.
            </li>
            <li>
              Every guest must produce a government-approved photo ID at the
              time of check-in.
            </li>
            <li>Teakwood is a plastic-free and litter-free property.</li>
            <li>
              Guests are required to carry their own plastic garbage bags and
              bottles at check-out.
            </li>
            <li>
              Your cooperation in keeping Teakwood clean is much appreciated.
            </li>
            <li>
              There are designated areas for smoking. Smoking in restricted
              areas will attract penalties.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Terms;