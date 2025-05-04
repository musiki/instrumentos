import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import numpy as np
from typing import List, Dict, Any, Optional

class PoeticEngine:
    def __init__(self, model_path: str = "checkpoint-epoch-5.pt"):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
        self.model = GPT2LMHeadModel.from_pretrained("gpt2")
        
        # Load the fine-tuned weights
        state_dict = torch.load(model_path, map_location=self.device)
        self.model.load_state_dict(state_dict)
        self.model.to(self.device)
        self.model.eval()

    def generate_responses(
        self,
        prompt: str,
        max_length: int = 100,
        num_return_sequences: int = 3,
        temperature: float = 0.8,
        top_k: int = 50,
        top_p: float = 0.95,
        repetition_penalty: float = 1.2,
        early_stopping: bool = True,
    ) -> List[str]:
        """
        Generate multiple poetic responses for a given prompt.
        
        Args:
            prompt: Input text to generate from
            max_length: Maximum length of generated text
            num_return_sequences: Number of different sequences to generate
            temperature: Higher values = more creative, lower = more focused
            top_k: Number of highest probability tokens to consider
            top_p: Cumulative probability threshold for token selection
            repetition_penalty: Penalty for repeating tokens
            early_stopping: Whether to stop at the first complete sentence
        
        Returns:
            List of generated text sequences
        """
        inputs = self.tokenizer.encode(prompt, return_tensors="pt").to(self.device)
        
        # Set up generation parameters
        gen_kwargs = {
            "max_length": max_length,
            "num_return_sequences": num_return_sequences,
            "temperature": temperature,
            "top_k": top_k,
            "top_p": top_p,
            "repetition_penalty": repetition_penalty,
            "do_sample": True,
            "early_stopping": early_stopping,
            "pad_token_id": self.tokenizer.eos_token_id,
        }

        # Generate sequences
        output_sequences = self.model.generate(inputs, **gen_kwargs)
        
        # Decode and clean up the generated sequences
        generated_sequences = []
        for sequence in output_sequences:
            text = self.tokenizer.decode(sequence, skip_special_tokens=True)
            # Remove the input prompt from the output
            text = text[len(self.tokenizer.decode(inputs[0], skip_special_tokens=True)):]
            generated_sequences.append(text.strip())
        
        return generated_sequences

if __name__ == "__main__":
    # Example usage
    engine = PoeticEngine()
    prompt = "The morning sun rises"
    
    print(f"Prompt: {prompt}\n")
    responses = engine.generate_responses(
        prompt=prompt,
        max_length=100,
        num_return_sequences=3,
        temperature=0.8
    )
    
    for i, response in enumerate(responses, 1):
        print(f"Response {i}:\n{response}\n") 