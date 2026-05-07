# Build Plan: Car Rental CRM Project

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Develop Fleet Management Module

_Category: `feature` · Priority: `high`_

Build a module to create and manage profiles for each car with details like registration, model, year, current location, and service history.

**Acceptance criteria:**
- User can add, update, and delete car profiles.
- Each car shows status as available, rented, or in service.
- Service history logs are viewable and editable for each car.

---

### 2. Create Booking System with Availability Calendar

_Category: `feature` · Priority: `high`_

Implement a booking system that allows staff to check car availability by date range and create new bookings, preventing double bookings.

**Acceptance criteria:**
- Users can search for available cars by date range.
- System prevents double-bookings by locking dates immediately after booking.
- Bookings can be created, updated, and cancelled by staff members.

---

### 3. Build Customer Management Module with Document Storage

_Category: `feature` · Priority: `high`_

Develop a customer management module that stores customer profiles, document uploads (like CNIC and license), and rental history.

**Acceptance criteria:**
- Staff can create and edit customer profiles.
- System allows uploading and viewing of customer documents (CNIC, license).
- Rental history for each customer can be viewed by staff.

---

### 4. Implement Vehicle Handover and Return Checklist

_Category: `feature` · Priority: `medium`_

Develop a mobile-friendly checklist for vehicle handover and return, including fields for fuel level, mileage, condition, and photo uploads.

**Acceptance criteria:**
- Checklist can be completed on mobile devices during handover and return.
- Checklist includes fields for fuel level, mileage, exterior and interior condition.
- Photos can be attached to completed checklists.
- Checklist entries are linked to the booking record.

---

### 5. Design Payments and Invoicing Module

_Category: `feature` · Priority: `medium`_

Create a module to record payments against bookings, generate invoices, and produce daily/monthly financial reports.

**Acceptance criteria:**
- Payments can be recorded in cash, bank transfer, or Easypaisa.
- Invoices can be generated for each booking and are viewable by staff.
- Daily and monthly collection reports can be accessed and exported.

---

### 6. Set Up Branch-Level Access Control

_Category: `feature` · Priority: `medium`_

Implement branch-level access so each branch sees its own data, while the owner has visibility across all branches.

**Acceptance criteria:**
- Branch accounts can only view and manage their own data.
- Owner account can view and manage data for all branches.
- Access level permissions are configurable between branch and owner roles.

---

### 7. Develop Public Booking Inquiry Form

_Category: `ui` · Priority: `low`_

Build a booking inquiry form on the existing website where customers can check availability and request bookings, converting them to CRM leads.

**Acceptance criteria:**
- Public form allows visitors to select car types and dates for booking inquiry.
- Form submissions create leads in the CRM for staff follow-up.
- Staff can view and convert leads from inquiries into finalized bookings.

---

### 8. Design Owner Dashboard and Reports

_Category: `ui` · Priority: `low`_

Create a dashboard for the owner with daily operational widgets and sections for weekly and monthly analytics regarding fleet and finances.

**Acceptance criteria:**
- Dashboard displays real-time operational status, cars rented, and revenues.
- Weekly and monthly analytical reports are accessible and exportable from dashboard.
- Dashboard layout is customizable for owner's preferences.

