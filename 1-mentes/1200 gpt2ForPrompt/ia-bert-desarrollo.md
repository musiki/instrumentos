# GPT-2 Fine-tuned Model for Poetic Text Generation

This project implements a fine-tuned GPT-2 model for generating poetic responses to prompts. The model has been trained on a curated dataset of poetic texts and can generate creative, contextually relevant responses.

## Project Structure

```
gpt2ForPrompt/
├── checkpoint-epoch-5.pt    # Fine-tuned model weights
├── poetic_engine.py        # Main engine implementation
├── requirements.txt        # Project dependencies
└── model/                 # Model configuration and training files
```

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Ensure the checkpoint file is in the correct location:
- The `checkpoint-epoch-5.pt` file should be in the root directory

## Usage

```python
from poetic_engine import PoeticEngine

# Initialize the engine
engine = PoeticEngine()

# Generate responses
responses = engine.generate_responses(
    prompt="Your prompt here",
    max_length=100,
    num_return_sequences=3,
    temperature=0.8
)

# Print responses
for i, response in enumerate(responses, 1):
    print(f"Response {i}:\n{response}\n")
```

## Parameters

- `max_length`: Maximum length of generated text
- `num_return_sequences`: Number of different responses to generate
- `temperature`: Controls randomness (higher = more creative)
- `top_k`: Number of highest probability tokens to consider
- `top_p`: Cumulative probability threshold for token selection
- `repetition_penalty`: Penalty for repeating tokens
- `early_stopping`: Whether to stop at complete sentences

## Model Details

The model is based on GPT-2 and has been fine-tuned on poetic texts. The checkpoint includes:
- Custom weights for poetic text generation
- Optimized parameters for creative writing
- Enhanced contextual understanding for poetic elements

## Development Notes

- The model performs best with clear, concise prompts
- Temperature values between 0.7 and 0.9 produce the most balanced results
- The repetition penalty helps prevent common GPT-2 issues with text loops
- Early stopping is enabled by default to produce more natural endings 