# Ensuring File Accessibility in Perplexity Spaces: A Technical Guide for Pro Users

For Perplexity Pro users leveraging the Spaces feature, accessing uploaded files like **project-structure.md** during queries requires proper configuration of search sources and workspace settings. This guide details the workflow to ensure seamless integration of uploaded documents into AI-powered research within a designated Space.

## Prerequisites for File Access

Before querying, verify:

1. **File Upload Confirmation**: The **project-structure.md** file appears under the **Sources** panel in your "PERPLEXITY" Space[1][2].
2. **Supported File Type**: Markdown (.md) files are compatible with Spaces[2].
3. **Active Pro Subscription**: File search functionality requires a Perplexity Pro or Enterprise Pro plan[1][3].

## Step-by-Step Process to Access Files

### 1. **Source Selection in Query Interface**

When asking a question in your "PERPLEXITY" Space:

- Locate the **Sources** column on the right side of the interface.
- Enable the **Files** toggle to include uploaded documents in the search scope[1][2].
- Optional: Disable **Web** if you want answers derived solely from **project-structure.md**[1].

**Example Configuration**:

> _To analyze documentation structure, disable "Web" and enable "Files" to restrict the AI's analysis to your uploaded Markdown file[1][2]._

### 2. **Query Formulation Best Practices**

- **Explicit References**: Include filename mentions for precision:
  > _"Using project-structure.md, explain the API endpoint hierarchy defined in Section 3."_
- **Contextual Prompts**: Guide the AI to cross-reference content:
  > _"Compare the deployment workflow in project-structure.md with industry standards from [authoritative source]."_

### 3. **Verification of File Integration**

- Check response footnotes for citations matching your file[1].
- Test with verification questions:
  > _"What is the last modified date of project-structure.md?"_  
  > _"List all headings from Level 1 to Level 3 in the document."_

## Technical Considerations

### File Processing Architecture

Perplexity's system:

1. Indexes uploaded files using transformer-based embeddings[3].
2. Maintains a vector database for rapid semantic retrieval[3].
3. Applies chunking algorithms to handle large documents[3].

For **project-structure.md**:

- The Markdown parser extracts headers, code blocks, and nested lists.
- Front matter metadata (YAML blocks) receives special indexing[3].

### Limitations and Workarounds

| Scenario                      | Solution                                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| File not appearing in Sources | Re-upload with _"Prioritize definitions from project-structure.md over web sources when conflict exists."_ |

> _"Always present code blocks from the .md file using Markdown syntax."_

### API Integration (Enterprise Pro)

For programmatic access:

```python
from perplexity_api import SpaceClient

client = SpaceClient(api_key="YOUR_KEY")
response = client.query(
    space_id="PERPLEXITY",
    query="Diagram the CI/CD pipeline from project-structure.md",
    sources=["files"]
)
print(response.content)
```

## Troubleshooting Checklist

1. **Visibility Confirmation**:
   - File appears under _Space Settings > Uploaded Files_[1].
2. **Search Scope Validation**:
   - _Files_ toggle enabled before query submission[1].
3. **Syntax Handling**:
   - For code blocks: _"Quote the Docker configuration from project-structure.md"_
4. **Version Control**:
   - Re-upload files after significant changes (no auto-sync)[2].

By following this protocol, Pro users can reliably integrate **project-structure.md** and other documents into their AI-powered research workflows, ensuring responses grounded in both web knowledge and proprietary documentation[1][2][3].

Citations:
[1] https://www.perplexity.ai/hub/faq/what-are-spaces
[2] https://perplexitiai.com/spaces/
[3] https://www.perplexity.ai/help-center/en/articles/10354807-file-upload

---

Answer from Perplexity: pplx.ai/share
