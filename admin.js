import  kafkaClient  from "./client.js";

async function init() {
  const admin = kafkaClient.admin();
  console.log("admin is conneting");
  admin.connect();
  console.log("admin CONNECTION successful");

  console.log("creating topics...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created successfully [ride-updates]");
  admin.disconnect();
  console.log("Admin disconnected");
}

init();
