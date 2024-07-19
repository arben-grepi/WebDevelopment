# Normalization and denormalization

are key strategies when modeling data in MongoDB. Each approach has its benefits and trade-offs, particularly regarding query performance and data consistency.

## Normalization

Normalization in MongoDB refers to structuring the data so that related data is stored in separate documents, using references to link them. This approach is similar to relational database normalization.

Benefits of Normalization:
Consistency:

Single Source of Truth: With normalization, each piece of data is stored only once. For example, an author's information is stored in a single document. If the author's name changes, it needs to be updated in one place only.
Data Integrity: By avoiding data duplication, you reduce the risk of inconsistent data across the database.
Efficient Updates:

Atomicity: Updating a single document (e.g., updating the author's name) is more straightforward and atomic, reducing the chances of update conflicts.
Reduced Storage:

Minimized Redundancy: Storing unique data in separate documents reduces redundancy and conserves storage space.

// Author document
let author = {
\_id: ObjectId('5f7f8a1b1c4ae56e6c3f9d57'),
name: 'Mosh Hamedani'
};

// Course document
let course = {
title: 'JavaScript Basics',
author: ObjectId('5f7f8a1b1c4ae56e6c3f9d57') // Reference to the author document
};

## Denormalization

Denormalization involves embedding related data within a single document. This approach is often used in NoSQL databases like MongoDB to improve read performance by reducing the number of lookups.

Benefits of Denormalization:
Improved Read Performance:

Fewer Joins/Lookups: Embedding related data within a single document means that the data can be retrieved with a single query, reducing the need for multiple lookups and joins.
Simpler Queries:

Self-Contained Documents: With all related data in one document, queries become simpler and more efficient, as they don't need to traverse multiple collections.
Atomic Reads:

Consistent Data Snapshot: Retrieving a single document that contains all related data ensures that you get a consistent snapshot of the data at the time of the query.

// Course document with embedded author
let course = {
title: 'JavaScript Basics',
author: {
name: 'Mosh Hamedani'
}
};

Trade-offs
Write Performance and Consistency:

Normalization generally offers better consistency and can make writes simpler and less error-prone since updates to the data only need to happen in one place.
Denormalization can complicate write operations, especially when updating embedded data, as the same data might need to be updated in multiple documents.
Read Performance:

Normalization can lead to more complex and slower read operations due to the need to perform multiple queries to assemble the related data.
Denormalization improves read performance by storing all related data in a single document, allowing for faster and more straightforward data retrieval.
Data Duplication and Storage:

Normalization minimizes data duplication, saving storage space.
Denormalization often leads to data duplication, increasing storage requirements, but it can improve read performance.

## Conclusion

Choosing between normalization and denormalization in MongoDB depends on the specific needs of your application. If your application performs many read operations, especially ones that need related data, denormalization might be beneficial despite the increased storage and potential consistency issues. On the other hand, if data consistency and storage efficiency are more critical, normalization might be the better choice.

Ultimately, a hybrid approach is often used in practice, where some parts of the data model are normalized and others are denormalized to balance the trade-offs based on the specific use case.

# Hybrid model

A hybrid model in MongoDB leverages both normalization and denormalization to balance the trade-offs between read performance and consistency. This approach allows you to optimize different parts of your data model based on their specific usage patterns.

When to Use a Hybrid Model
Frequent Reads with Related Data: Denormalize to embed related data within a single document for efficient reads.
Frequent Updates to Shared Data: Normalize to store shared or frequently updated data in separate documents to maintain consistency.
Varying Access Patterns: Use a combination of both techniques to cater to different access patterns within the same application.
Example Use Case: An E-commerce System
Consider an e-commerce system with users, products, and orders.

## Normalized Part

Users and Products are normalized because they are referenced frequently and may be updated independently.

// User document
let user = {
\_id: ObjectId('userId123'),
name: 'John Doe',
email: 'john@example.com'
};

// Product document
let product = {
\_id: ObjectId('productId123'),
name: 'Laptop',
price: 999.99
};

## Denormalized Part

Orders are denormalized because they are read frequently and need all related information in a single document for efficient access.

// Order document with embedded user and product information
let order = {
\_id: ObjectId('orderId123'),
user: {
\_id: ObjectId('userId123'),
name: 'John Doe'
},
items: [
{
product: {
_id: ObjectId('productId123'),
name: 'Laptop',
price: 999.99
},
quantity: 1
}
],
total: 999.99,
orderDate: ISODate('2023-07-19T00:00:00Z')
};

## Benefits of a Hybrid Model

Optimized Read Performance:

Frequently accessed data (like orders) is denormalized, allowing for quick reads without additional lookups.
Less frequently accessed or updated data (like user profiles) remains normalized, ensuring data consistency and reducing redundancy.
Consistency and Efficiency:

Shared data (like user profiles and products) is updated in a single place, ensuring consistency across the database.
Embedded data in orders provides a consistent snapshot of the data at the time of the order, even if the original user or product data changes later.
Flexibility:

The hybrid approach provides flexibility to adapt to changing requirements and optimize different parts of the application as needed.
Implementation Tips
Identify Hotspots:

Determine which parts of your application require frequent reads and should be denormalized for performance.
Identify which parts require frequent updates and should be normalized to maintain consistency.
Monitor and Adjust:

Regularly monitor the performance and access patterns of your database.
Adjust your data model as needed to address performance bottlenecks or consistency issues.
Use References Smartly:

Use references to link normalized data. For instance, the order document can reference the user and product IDs while embedding other frequently accessed data.

// Order document with references to user and product documents
let order = {
\_id: ObjectId('orderId123'),
userId: ObjectId('userId123'),
items: [
{
productId: ObjectId('productId123'),
name: 'Laptop',
price: 999.99,
quantity: 1
}
],
total: 999.99,
orderDate: ISODate('2023-07-19T00:00:00Z')
};

### Querying Hybrid Model

**Retrieve Order with Embedded Data:**
db.orders.find({ \_id: ObjectId('orderId123') });

**Join Normalized Data:**
db.orders.aggregate([
{ $match: { _id: ObjectId('orderId123') } },
{
$lookup: {
from: 'users',
localField: 'userId',
foreignField: '_id',
as: 'user'
}
},
{
$lookup: {
from: 'products',
localField: 'items.productId',
foreignField: '_id',
as: 'products'
}
}
]);

## Conclusion

The hybrid model in MongoDB allows you to take advantage of both normalization and denormalization, optimizing different parts of your data model based on their specific access patterns and update frequencies. This approach provides a balance between read performance and data consistency, making it well-suited for complex applications with varying requirements.
