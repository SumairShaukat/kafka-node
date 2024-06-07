import  { Kafka } from "kafkajs";

 const kafkaClient = new Kafka({
  clientId: "kafka-client",
  brokers: ["192.168.1.2:9092"],
});


export default kafkaClient;