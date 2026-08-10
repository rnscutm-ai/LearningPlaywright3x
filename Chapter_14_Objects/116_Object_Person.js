const user = {
  id: 101,
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "+1-555-123-4567",
  gender: "male",
  isActive: true,
  createdAt: "2024-01-15T10:30:00Z",
  lastLogin: "2026-08-10T08:45:00Z",

  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    coordinates: {
      lat: 40.7128,
      lng: -74.006
    }
  },

  profile: {
    username: "johndoe",
    avatar: "https://example.com/avatar.jpg",
    bio: "Web developer and coffee enthusiast",
    website: "https://johndoe.dev",
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "@johndoe"
    }
  },

  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  },

  hobbies: ["coding", "cycling", "photography", "travel"],

  skills: [
    { name: "JavaScript", level: "advanced" },
    { name: "React", level: "intermediate" },
    { name: "Node.js", level: "advanced" },
    { name: "Playwright", level: "intermediate" }
  ],

  education: [
    {
      school: "ABC University",
      degree: "B.Sc. Computer Science",
      year: 2018
    },
    {
      school: "XYZ Bootcamp",
      degree: "Full Stack Web Development",
      year: 2020
    }
  ],

  workExperience: [
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      years: "2020-2023",
      projects: ["E-commerce Platform", "Admin Dashboard"]
    },
    {
      company: "StartUp Labs",
      role: "Software Engineer",
      years: "2023-Present",
      projects: ["Automation Suite", "API Gateway"]
    }
  ],

  favoriteFoods: {
    breakfast: ["pancakes", "eggs"],
    lunch: ["burger", "salad"],
    dinner: ["pizza", "sushi"]
  },

  tags: ["developer", "remote", "active", "learner"],

  paymentMethods: [
    {
      type: "card",
      brand: "Visa",
      last4: "4242",
      expiry: "12/27"
    },
    {
      type: "wallet",
      provider: "PayPal",
      email: "john.doe@example.com"
    }
  ],

  addresses: [
    {
      label: "Home",
      street: "456 Oak Avenue",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA"
    },
    {
      label: "Work",
      street: "789 Pine Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA"
    }
  ],

  // methods (functions inside an object)
  getFullName() {
    return `${this.name} (${this.profile.username})`;
  },

  isAdult() {
    return this.age >= 18;
  },

  getAgeInYears() {
    return `${this.name} is ${this.age} years old.`;
  },

  getFullAddress() {
    const a = this.address;
    return `${a.street}, ${a.city}, ${a.state} ${a.zipCode}, ${a.country}`;
  },

  getContactInfo() {
    return `Email: ${this.email} | Phone: ${this.phone}`;
  },

  getProfile() {
    const p = this.profile;
    return `${p.bio} | Website: ${p.website}`;
  },

  getSocialLinks() {
    const s = this.profile.socialLinks;
    return `GitHub: ${s.github} | LinkedIn: ${s.linkedin} | Twitter: ${s.twitter}`;
  },

  isNotificationEnabled(type) {
    return this.preferences.notifications[type] === true;
  },

  listHobbies() {
    return this.hobbies.join(", ");
  },

  getTopSkill() {
    return this.skills[0].name;
  },

  getSkillLevel(skillName) {
    const skill = this.skills.find((s) => s.name === skillName);
    return skill ? skill.level : "not found";
  },

  listEducation() {
    return this.education.map((e) => `${e.degree} - ${e.school} (${e.year})`).join(" | ");
  },

  listWorkExperience() {
    return this.workExperience.map((w) => `${w.role} at ${w.company} (${w.years})`).join(" | ");
  },

  getFavoriteFood(meal) {
    return this.favoriteFoods[meal].join(", ");
  },

  getPrimaryPayment() {
    return `${this.paymentMethods[0].brand} ending in ${this.paymentMethods[0].last4}`;
  },

  getAddressByLabel(label) {
    const addr = this.addresses.find((a) => a.label === label);
    return addr ? `${addr.street}, ${addr.city}, ${addr.state} ${addr.zipCode}` : "not found";
  },

  isActiveUser() {
    return this.isActive ? "Active" : "Inactive";
  },

  getDaysSinceCreated() {
    const days = Math.floor((Date.now() - new Date(this.createdAt).getTime()) / (1000 * 60 * 60 * 24));
    return `Account created ${days} days ago`;
  },

  updateLastLogin(newDate) {
    this.lastLogin = newDate;
    return `Last login updated to: ${this.lastLogin}`;
  },

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return `Hobby added: ${hobby}`;
  }
};

// ---------- function calls ----------
console.log("--- User Methods ---");
console.log(user.getFullName());              // John Doe (johndoe)
console.log(user.isAdult());                  // true
console.log(user.getAgeInYears());            // John Doe is 30 years old.
console.log(user.getFullAddress());           // 123 Main Street, New York, NY 10001, USA
console.log(user.getContactInfo());           // Email: john.doe@example.com | Phone: +1-555-123-4567
console.log(user.getProfile());               // Web developer and coffee enthusiast | Website: https://johndoe.dev
console.log(user.getSocialLinks());           // GitHub: https://github.com/johndoe | LinkedIn: https://linkedin.com/in/johndoe | Twitter: @johndoe
console.log(user.isNotificationEnabled("email")); // true
console.log(user.isNotificationEnabled("sms"));   // false
console.log(user.listHobbies());              // coding, cycling, photography, travel
console.log(user.getTopSkill());              // JavaScript
console.log(user.getSkillLevel("React"));     // intermediate
console.log(user.getSkillLevel("Python"));    // not found
console.log(user.listEducation());            // B.Sc. Computer Science - ABC University (2018) | Full Stack Web Development - XYZ Bootcamp (2020)
console.log(user.listWorkExperience());       // Frontend Developer at Tech Corp (2020-2023) | Software Engineer at StartUp Labs (2023-Present)
console.log(user.getFavoriteFood("breakfast")); // pancakes, eggs
console.log(user.getPrimaryPayment());        // Visa ending in 4242
console.log(user.getAddressByLabel("Work"));  // 789 Pine Street, San Francisco, CA 94105
console.log(user.isActiveUser());             // Active
console.log(user.getDaysSinceCreated());      // Account created 938 days ago
console.log(user.updateLastLogin("2026-08-10T09:30:00Z")); // Last login updated to: 2026-08-10T09:30:00Z
console.log(user.addHobby("reading"));        // Hobby added: reading
console.log(user.listHobbies());              // coding, cycling, photography, travel, reading
