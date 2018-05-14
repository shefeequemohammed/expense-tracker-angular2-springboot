package com.shef.expensetracker.expense;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/vendors")
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@GetMapping
	public List<Expense> getAllExpenses(){
		return expenseService.findAll();
	}
	
		
	@GetMapping(path = {"/{vendorId}"})
	public Expense getExpense(@PathVariable int vendorId){
		return expenseService.getExpenseById(vendorId);
	}
	
	@PostMapping
	public void addExpense(@RequestBody Expense expense){
		logger.debug("Shef here");
		logger.info("Shef here");
		logger.info(expense.toString());
		expenseService.addExpense(expense);
	}
	
	@PutMapping(path = {"/{vendorId}"})
	
	public void updateExpense(@RequestBody Expense expense, @PathVariable int vendorId){
		expenseService.updateExpense(expense);
	}
	
	@DeleteMapping(path = {"/{vendorId}"})
	public void deleteExpense( @PathVariable int vendorId){
		expenseService.deleteExpense(vendorId );
	}
	
	
}
