---
title: "Tesler's Law in Action: How S3 hides essential complexity"
description: "AWS S3 is a masterclass in why Tesler’s Law is so enduring. You can't eliminate complexity, but you can hide it behind thoughtful abstractions."
---

> **“Every application must have an inherent amount of _irreducible_ complexity. The only question is who will have to deal with it.”** - [Tesler's Law](/laws/teslers-law)

The irreducible complexity of highly available file storage includes:

- Durability across failures
- Availability and consistency tradeoffs
- Versioning and immutability
- Latency and geographic replication
- Access control, security, and cost optimization

> **“Great abstractions handle essential complexity in a way that aligns with user goals while minimizing accidental complexity.”** - [Tesler's Corollary](/laws/teslers-law)

Most developers just want to store and retrieve files reliably. S3 is a developer-friendly abstraction which provides:

- A simple REST API
- Virtually infinite flat storage
- “Buckets” as a mental model
- 11 9’s durability
- Usage-based billing

With S3, you don’t need to think about hard drives, replication, file systems, or backup schedules. S3 shifts essential complexity away from the user and reduces accidental complexity through:

- Stable, simple interfaces
- Abstract concepts that match mental models
- Clear pricing and service-level guarantees

You could build your own storage system, but you’d be re-implementing hard tradeoffs that S3 has already solved for you.

## Conclusion

**Great systems don’t eliminate essential complexity — they encapsulate it behind an interface that aligns with the user’s goals, while avoiding new layers of confusion or unpredictability.**

S3 is a masterclass in why Tesler’s Law is so enduring. You can't eliminate complexity, but you can hide it behind thoughtful abstractions.
