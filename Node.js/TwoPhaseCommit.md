# Two-Phase Commit in MongoDB

The two-phase commit protocol (2PC) is a distributed transaction protocol used to ensure data consistency across distributed systems. In MongoDB, 2PC is employed in the context of replica sets and sharded clusters to ensure that all members of a distributed database agree on the outcome of a transaction.

## Key Concepts of Two-Phase Commit in MongoDB

### Distributed Transactions

In a distributed database system, transactions may span multiple nodes or shards. Ensuring consistency across these nodes requires a protocol like 2PC to make sure all nodes either commit or abort the transaction together.

### Phases of 2PC

1. **Phase 1 - Prepare:** The coordinator node (which manages the transaction) sends a prepare request to all participant nodes. Each participant node prepares to commit the transaction and responds with a vote indicating whether it is ready to commit or needs to abort.

2. **Phase 2 - Commit/Abort:** After receiving votes from all participant nodes, the coordinator decides whether to commit or abort the transaction based on the votes. If all participants are ready to commit, the coordinator sends a commit request. If any participant votes to abort, the coordinator sends an abort request. Each participant then completes the transaction based on the coordinator's decision.

## Two-Phase Commit in MongoDB

In MongoDB, 2PC is particularly relevant for transactions that span multiple documents, collections, or shards. Here’s how it works:

### Replica Sets

- **Transactions:** MongoDB supports multi-document transactions in replica sets. These transactions use the two-phase commit protocol to ensure that all writes are committed or aborted consistently across the replica set.

### Sharded Clusters

- **Transactions Across Shards:** MongoDB also supports multi-document transactions across sharded clusters. In this case, 2PC ensures that all shards involved in the transaction either commit or abort the transaction.

## Example Workflow

Consider a scenario where you want to update a document in a sharded cluster and a replica set as part of a single transaction:

1. **Start Transaction:** Begin a transaction on the MongoDB driver.

2. **Write Operations:** Perform multiple operations (inserts, updates) on different shards and replica sets.

3. **Prepare Phase:** MongoDB coordinates with all involved shards and replica sets to prepare for the commit. Each participant node prepares to commit the changes and responds to the coordinator.

4. **Commit Phase:** If all participants are ready to commit, the coordinator sends a commit request to all nodes. If any node indicates a failure or needs to abort, the coordinator sends an abort request.

5. **Completion:** All nodes commit or abort based on the coordinator’s request.

## Key Points

- **Consistency:** 2PC ensures that all nodes involved in the transaction reach a consensus on whether to commit or abort the transaction, maintaining consistency across the database.
- **Atomicity:** This protocol helps in achieving atomicity, meaning that either all parts of the transaction are applied, or none are.
- **Complexity:** 2PC can be complex and may involve performance trade-offs, especially in systems with many nodes or high transaction volumes.
- **MongoDB Driver Support:** MongoDB drivers handle the intricacies of the two-phase commit protocol, so developers typically interact with transactions using high-level APIs provided by MongoDB.

## Example Code

Here’s an example using the MongoDB Node.js driver to perform a transaction across shards:

```javascript
const mongoose = require("mongoose");

async function runTransaction() {
  const uri = "mongodb://localhost:27017/shop"; // MongoDB URI with database name
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const session = await mongoose.startSession();
  session.startTransaction();

  const Order = mongoose.model(
    "Order",
    new mongoose.Schema({
      name: String,
      amount: Number,
      status: String,
    })
  );

  try {
    // Update document in the first collection
    await Order.updateOne(
      { _id: "id1" }, // Replace with actual ID
      { $set: { status: "processed", amount: 150 } },
      { session }
    );

    // Update document in the second collection
    await Order.updateOne(
      { _id: "id2" }, // Replace with actual ID
      { $set: { status: "processed", amount: 150 } },
      { session }
    );

    // Commit the transaction
    await session.commitTransaction();
    console.log("Transaction committed.");
  } catch (error) {
    // Abort the transaction if there's an error
    await session.abortTransaction();
    console.error("Transaction aborted due to error:", error);
  } finally {
    // End the session
    session.endSession();
    await mongoose.disconnect();
  }
}

// Run the transaction example
runTransaction().catch(console.dir);
```
