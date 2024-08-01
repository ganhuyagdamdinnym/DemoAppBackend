const User = {
  userName: String,
  email: String,
  password: String,
  role: String,
  appliedJobs: [String], //hereglegchiin huselt gargasan ajluudiin id
  createdAt: Date,
  chatRooms: [String],
};

const Company = {
  id: String,
  name: String,
  description: String,
  location: String,
  industry: String,
  posts: [String],
  //   website: String,
  contactEmail: String,
  createdAt: Date,
};

const JobPosting = {
  id: String,
  title: String, //
  description: String,
  company: String,
  location: String, //
  salary: Number,
  type: String,
  postedAt: Date,
  applicationDeadline: Date,
  contactEmail: String,
  requirements: [String],
  companyWebsite: String,
};

const JobRequest = {
  jobId: String,
  userId: String,
  resume: String,
  status: String,
  appliedAt: Date,
};

const ChatRoom = {
  participants: [String],
  createdAt: Date,
  lastMessageAt: Date,
  Message: [
    {
      senderId: String,
      text: String,
      sentAt: Date,
    },
  ],
};

type ProductAnnouncement = {
  id: String;
  userId: String;
  ProductName: String;
  ProductImage: string[];
  price: number;
  phoneNumber: String;
};
