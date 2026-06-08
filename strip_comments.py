import re
import sys

def strip_comments(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r'\{\s*/\*.*?\*/\s*\}', '', content, flags=re.DOTALL)

    pattern = r'("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`|/\*.*?\*/|//[^\r\n]*)'
    
    def replacer(match):
        s = match.group(0)
        if s.startswith('/') or s.startswith('//'):
            return ""
        return s

    content = re.sub(pattern, replacer, content, flags=re.DOTALL)

    lines = content.splitlines()
    cleaned_lines = []
    prev_empty = False
    for line in lines:
        if not line.strip():
            if not prev_empty:
                cleaned_lines.append("")
                prev_empty = True
        else:
            cleaned_lines.append(line)
            prev_empty = False

    content = "\n".join(cleaned_lines) + "\n"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        strip_comments(sys.argv[1])
        print(f"Successfully stripped comments from {sys.argv[1]}")
    else:
        print("Usage: python strip_comments.py <file_path>")
