import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://leonardobalsalobre:Maximo123@cluster0.h5jnt.mongodb.net/teste?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
