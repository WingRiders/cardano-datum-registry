# Cardano Datum Registry

The Cardano Datum Registry is a repository for managing and sharing [CDDL](https://datatracker.ietf.org/doc/html/rfc8610) schema definitions for Cardano datums.
The primary goal is to provide a standard source of CDDL schemas that can be used to parse and display readable representations of [CBOR](https://cbor.io/) data using the [Datum Explorer library](https://github.com/WingRiders/datum-explorer).
These readable representations can be integrated into various clients such as wallets, explorers, and DApps.

---

## How to use the registry

The Cardano Datum Registry provides CDDL schema definitions that can be used to parse CBOR data into a readable format. This parsing is done using the [Datum Explorer library](https://github.com/WingRiders/datum-explorer).

### Steps to use the registry:
1. **Fetch CDDL schemas**: Clone the repository or download the relevant CDDL files from the `projects/` folder.
2. **Use the Datum Explorer library**: Pass the CDDL schema and CBOR data to the Datum Explorer library to parse and convert the CBOR into a structured, readable JavaScript object.
3. **Display parsed data**: Integrate the structured data into your client (wallet, explorer, or DApp).

Refer to the [Datum Explorer documentation](https://github.com/wingriders/datum-explorer) for detailed instructions on parsing and validating CBOR data.

---

## How to contribute new schema definitions

Contributions to the Cardano Datum Registry are welcome! Follow the guidelines below to ensure consistency and maintain quality across schema definitions.

### Contribution guidelines
- **Project Structure**:  
  CDDL schema definitions must be organized within the `projects/` folder. Each project should have its own subfolder, with CDDL files placed inside.

  ```
  projects/
    └── myProject/
        └── exampleSchema.cddl
  ```

- **File Naming**:  
  CDDL files should follow the **lowerCamelCase** naming convention and use the `.cddl` extension. For example:
  ```
  exampleSchema.cddl
  transactionOutput.cddl
  ```

- **Schema Format and Structure**:  
  Each CDDL file must contain a valid CDDL schema definition. Follow the [CDDL Datum Schema Design Document](https://github.com/WingRiders/datum-explorer/blob/main/docs/cddlDatumSchemaDesign.md) for details on supported features, structure, and best practices. Ensure your schema is readable, concise, and easy to maintain.

- **CI Validation**:  
  The repository includes a continuous integration (CI) pipeline that validates each pull request:
    - **File name format**: Ensures compliance with the lowerCamelCase naming convention and `.cddl` extension.
    - **CDDL validation**: Checks that each CDDL file is syntactically correct and conforms to the supported feature set.

### How to test your schema locally

To ensure your CDDL schema works as expected, you can test it locally before submitting a pull request.

1. Install [bun](https://bun.sh/)
   ```shell
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone this repository.
3. Run the following command to validate your changes:
   ```bash
   bun install
   bun validate
   ```

---

### Submitting a pull request
1. **Fork the repository** and create a new branch for your contribution.
2. **Add your CDDL schema** in the appropriate subfolder under `projects/`.
3. **Test your schema** using the Datum Explorer library (optional but recommended).
4. **Submit a pull request** describing your changes and the purpose of the new schema.

The CI will validate your schema automatically once the pull request is created.

---

## Example

Here’s an example of a valid CDDL schema definition:

```cddl
transactionOutput = [ transactionId: bytes, outputIndex: int, address: bytes, value: int ]
```

---

## Conclusion

The Cardano Datum Registry is a key component of the Datum Explorer project. By contributing to this repository, you help expand the ecosystem of available datum schemas, making it easier for developers to build and maintain high-quality Cardano applications.

For questions or feedback, feel free to open an issue or join the discussion in the repository.
