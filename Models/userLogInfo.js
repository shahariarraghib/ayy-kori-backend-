const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      //   validate: {
      //     validator: (value) =>
      //       validator.isStrongPassword(value, {
      //         minLength: 4,
      //       }),
      //     message: "Password {VALUE} is not strong",
      //   },
    },
    confirmPassword: {
      type: String,
      required: [true, "please Confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password don't match",
      },
    },

    api_key: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "reader"],
      default: "reader",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },

    productbuyinfo: [
      {
        type: ObjectId,
        ref: "productSchema",
      },
    ],

    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

// password hashing
userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcryptjs.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

// api key
userSchema.pre("save", function (next) {
  const genAPIKey = [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join("");

  this.api_key = genAPIKey;

  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcryptjs.compareSync(password, hash);
  return isPasswordValid;
};

const userLogInfo = mongoose.model("userLogInfo", userSchema);
module.exports = userLogInfo;
